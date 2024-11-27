import client from '@/data/client';
import { groq } from 'next-sanity';
import {  NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'about' && title != null]{
      ..., 
      "body": body[]{
      ..., 
      asset->{
        ...,
        "_key": _id
      }
    },
      'image': mainImage.asset->url,
      "slug": slug.current,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..100], "") + "...",
      }
      `
    );

    return NextResponse.json(res)
  } catch (err) {
    console.log(err);
  }
}