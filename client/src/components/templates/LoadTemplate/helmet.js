import React from 'react';
import { Helmet } from 'react-helmet';

export default class InfoClinicHelmet extends React.Component {
    render() {
        const {
            title,
            description,
            imageURL,
            type,
            relativeURL,
            articlePublishDate,
            articleModifiedDate,
        } = this.props;
        let infoClinicDesc = 'The cure for ignorance is knowledge.';
        let infoClinicTitle = 'Infoclinic - The cure for ignorance is knowledge';
        let url = 'https://www.infoclinic.in';
        if (title) {
            infoClinicTitle = `${ title } | ${ infoClinicTitle }`;
        }
        if (description) {
            infoClinicDesc = description;
        }
        if (relativeURL) {
            url = `${ 'https://www.infoclinic.in' }${ relativeURL }`;
        }

        const escapedString = (str) => {
            return str
                .replace('&lt;p&gt;', '')
                .replace('[&amp;hellip;]&lt;/p&gt;', '')
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('[…]', '');
        };

        let metaURL = 'https://infoclinic.in/infoclinic-logo.jpg';

        if (imageURL) {
            metaURL = imageURL;
        }

        return (
            <Helmet>
                <meta charSet='utf-8' />
                <title>{ infoClinicTitle }</title>
                <link rel='canonical' href={ url } />
                <meta
                    name='description'
                    content={ escapedString(infoClinicDesc) }
                />
                <meta itemProp='name' content={ infoClinicTitle } />
                <meta itemProp='image' content={ metaURL } />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@InfoClinicIndia' />
                {
                    title && <meta name='twitter:title' content={ infoClinicTitle } />
                }
                <meta name='twitter:description' content={ escapedString(infoClinicDesc) } />
                <meta name='twitter:image:src' content={ metaURL } />
                <meta property='og:title' content={ infoClinicTitle } />
                <meta property='og:type' content={ type || 'website' } />
                <meta property='og:relativeURL' content={ url } />
                <meta property='og:image' content={ metaURL } />
                <meta property='og:description' content={ escapedString(infoClinicDesc) } />
                <meta property='og:site_name' content={ infoClinicTitle } />
                {
                    (type === 'article') && <meta property='article:modified_time' content={ articleModifiedDate } />
                }
                {
                    (type === 'article') && <meta property='article:published_time' content={ articlePublishDate } />
                }
                <meta property='fb:admins' content='1056731331111377' />
            </Helmet>
        );
    }
}
