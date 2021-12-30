import * as React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import Markdown from 'markdown-to-jsx';

function Demo(props) {
    return (
        <div data-sb-object-id="content/pages/demo.md">
            <h1 data-sb-field-path="header">{props.page.header}</h1>
            <div data-sb-field-path="text">{props.page.text}</div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // The "data" object is generated by sourcebit.js and cached inside .sourcebit-nextjs-cache.json
    const data = await sourcebitDataClient.getData();
    const props = await resolveStaticProps('/demo', data);
    return { props };
}

export default withRemoteDataUpdates(Demo);
