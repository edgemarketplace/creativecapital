'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PlanStatusControls({ planId }: { planId: string }) {
  const router = useRouter();
  const [pendingStatus, setPendingStatus] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function setStatus(status: 'approved' | 'blocked') {
    setPendingStatus(status);
    setError('');

    try {
      const response = await fetch(`/api/edge-marketplace/plans/${planId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? 'Status update failed.');
      }

      router.refresh();
    } catch (event) {
      setError(event instanceof Error ? event.message : 'Status update failed.');
    } finally {
      setPendingStatus(null);
    }
  }

  return (
    <div className="mt-5 grid gap-2">
      <button
        type="button"
        onClick={() => setStatus('approved')}
        disabled={Boolean(pendingStatus)}
        className="w-full rounded-md bg-[#172033] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pendingStatus === 'approved' ? 'Approving...' : 'Approve plan'}
      </button>
      <button
        type="button"
        onClick={() => setStatus('blocked')}
        disabled={Boolean(pendingStatus)}
        className="w-full rounded-md border border-[#D9D4C7] bg-white px-4 py-2 text-sm font-semibold text-[#172033] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pendingStatus === 'blocked' ? 'Updating...' : 'Request more info'}
      </button>
      {error && <p className="text-xs font-medium text-[#8A1F1F]">{error}</p>}
    </div>
  );
}

