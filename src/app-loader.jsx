import React from 'react'
import { css } from '@emotion/core'
import { Container } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function AppLoader () {

    return (
        // <HashLoader
        //     css={override}
        //     sizeUnit={"px"}
        //     size={100}
        //     color={'#0469b9'}
        //     heightUnit={500}
        //     loading={true}
        // />
        <div className="app-loader">
            <div className="loadings"></div>
        </div>
    )

}

export default AppLoader;