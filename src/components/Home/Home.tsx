import { memo} from 'react';
import type { FC } from 'react';

interface HomeProps {
    className?: string;
}

const Home: FC<HomeProps> = memo(function Home(props = {}) {
    const { className } = props;

    return (
        <div className={className}>
           <div>This is Home</div>
        </div>
    );
});

export default Home;

