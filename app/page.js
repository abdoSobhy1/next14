import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Hello World
        <Link href={'/example'}>Go to example page</Link>
      </main>
    </div>
  );
}
