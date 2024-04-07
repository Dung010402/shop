import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Dung010402/data/data/`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
    }, [setProduct]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h3 className={cx('title')}>Hàng mới về</h3>
                <Link className={cx('more')}>
                    Xem thêm
                    <FontAwesomeIcon className={cx('more--icon')} icon={faChevronRight} />
                </Link>
            </div>
            <div className={cx('inner--item')}>
                {product.map((result) => (
                    <Link key={result.id} to={`product/${result.id}`} className={cx('item')}>
                        <img className={cx('item--img')} src={result.imageMain} alt="" />
                        <div className={cx('item--title')}>{result.title}</div>
                        <div className={cx('item--discount')}>Giảm {result.discount}%</div>
                        <div className={cx('item--bottom')}>
                            <div className={cx('item--price')}>{result.coinsAfter}.000đ</div>
                            <div className={cx('item--sold')}>Đã bán {result.sold}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
