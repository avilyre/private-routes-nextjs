import React from 'react';
import Router from 'next/router';

const login = '/';

export default WrraperRouterAccess => {
    const hocComponent = ({ props }) => <WrraperRouterAccess {...props} />

    hocComponent.getInitialProps = async (context) => {
        const userAuthenticated = true;

        if (!userAuthenticated) {

            if (context.res) {
                context.res?.writeHead(401, {
                    Location: login,
                });
                context.res?.end();
            } else {
                Router.push(login);
            }

        } else if (WrraperRouterAccess.getInitialProps) {
            const wrrapedProps = await WrraperRouterAccess.getInitialProps({ ...context, user: userAuthenticated });
            return { ...wrrapedProps, userAuthenticated }
        }

        return { userAuthenticated };
    }

    return hocComponent;
};