
import client from '@/data/clientConfig';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'settings' && comp_name != null]{
    ...,
        'comp_logo' : comp_logo.asset->url,
        'pageheader': pageheader.asset->url,
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
