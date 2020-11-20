import React from 'react'
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export const Test = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <main>
            <section className="container">
                <Button onClick={handleClick}>Redirect</Button>
            </section>
        </main>
    )
}
