

import pageNotFound from '../assets/notfFound2.png';
import styles from '../styles/PageNotFound.module.css';

export default function NotFound() {
    return (
        <>
            <div className="flex justify-center col-span-5 pt-15 border-x-2 border-grey-600 pb-4 px-4">
                <img src={pageNotFound} className={styles.imageDiv} />
            </div>
        </>
    )
}
