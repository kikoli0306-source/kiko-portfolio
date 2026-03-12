import { works } from '$lib/works';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const work = works.find(w => w.slug === params.slug);
  if (!work) throw error(404, 'Not found');
  return { work };
};