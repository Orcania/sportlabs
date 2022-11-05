import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';

import LogoComponent from 'src/components/commons/logo';

import socialMediaData from 'src/static/social-media';

import styles from './home.module.scss';

const { title } = styles;

const HomePage = () => {
    return (
        <div className="has-bg-hdark" style={{ height: '100vh' }}>
            <div
                className="container px-5 py-6 is-flex is-flex-direction-column is-justify-content-space-evenly"
                style={{ height: '100%' }}
            >
                <h1 id={title} className="title has-font-sport has-text-white shad has-text-centered">
                    SPORTING LABS
                </h1>

                <h2 className="subtitle has-text-white has-font-sport has-text-centered is-size-4 shad2">
                    THE LEADING WEB
                    <span className="has-font-akira " style={{ fontSize: '1.75rem' }}>
                        <b>
                            <i>3</i>
                        </b>
                    </span>{' '}
                    SPORTS FANTASY BRAND <br /> POWERED BY THE BLOCHCHAIN
                </h2>

                <h2 className="subtitle has-text-white has-font-sport has-text-centered is-size-4 shad2">
                    ONGOING PROJECT
                </h2>

                <div className="is-flex is-justify-content-center">
                    <LogoComponent />
                </div>

                <div className="is-flex is-justify-content-center">
                    {socialMediaData.map(item => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="has-text-white has-font-sport has-text-centered is-size-4 mx-3"
                        >
                            {item.icon()}
                        </a>
                    ))}
                </div>

                <h4 className="subtitle has-text-white has-font-montserrat has-text-centered is-size-7">
                    <b>
                        <i> © 2022 SPORTING LABS–ALL RIGHTS RESERVED</i>
                    </b>
                </h4>
            </div>
        </div>
    );
};

HomePage.getLayout = page => getPageTitleLayout(page, 'Home');

export default HomePage;
