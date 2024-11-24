import { NextStudio } from 'next-sanity/studio';
import studioConfig from '@/data/studio';

const AdminPage = () => {
  return <NextStudio config={studioConfig} />;
};

export default AdminPage;
