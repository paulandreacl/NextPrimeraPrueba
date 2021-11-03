import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
   <div>
     <p>Hola mundo</p>
   <Link href='/admin/users'>
     <a>Ir a admin usuarios</a>
   </Link>
   </div>
  )
}

export default Home
