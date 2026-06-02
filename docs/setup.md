# Setup Guide

## Prerequisites

- Node.js 18+
- npm 9+
- Git

## Initial Setup

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/edgemarketplace/creativecapital.git
   cd creativecapital
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create environment file:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Configure Sanity (optional for initial development):
   - Create a Sanity project at https://www.sanity.io
   - Get your project ID and dataset name
   - Update `.env.local` with your credentials

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open http://localhost:3000 in your browser.
