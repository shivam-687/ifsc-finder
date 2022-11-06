import type { NextApiRequest, NextApiResponse } from 'next'
import generateSitemap from '../../lib/SitemapGenerator';


type Data = {
    data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

const sitemap = await generateSitemap();
res.setHeader('Content-Type', 'text/xml');
// res.write(sitemap);
  res.status(200).send({result: 'success'});
}
