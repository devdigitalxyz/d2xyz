import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = JSON.parse(req.body);

  if (!email || !name || !message) {
    return res
      .status(400)
      .json({ error: 'Missing required fields', success: false });
  }

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method not allowed', success: false });
  }

  const data = { fields: { name, email, message } };

  const reqAirTable = await fetch(
    'https://api.airtable.com/v0/appoEsGjz7c08UelP/Contact-Form',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AIRTABLE_API}`,
      },
      body: JSON.stringify(data),
    },
  );

  if (reqAirTable.status === 200) {
    return res
      .status(200)
      .json({ success: true, res: await reqAirTable.json() });
  }

  return res
    .status(500)
    .json({ error: 'Internal Server Error', success: false });
};
