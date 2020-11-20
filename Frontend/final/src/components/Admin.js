import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';




export const Admin = () => {
    const history = useHistory();

     const handleClick = () => {
        history.push("/");
    }

   
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');

    return (
        <main>
            <section className='container'>
                <Form>
                    <Form.Field>
                        <input placeholder="Enter the name" type="text"
                             name={name}
                            onChange={e => setName(e.target.value)}
                        />
                       
                    </Form.Field>
                
                    <Form.Field>
                        <input placeholder="age" type="number"
                        age={age}
                        onChange={e => setAge(e.target.value)}
                        />
                        
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder="Enter image url"
                        image={image}
                        onChange={e => setImage(e.target.value)}
                        />
                        
                    </Form.Field>

                    <Form.Field>
                        <Button onClick={async () => {
                            const birthday = { name, age, image };
                            const response = await fetch('/add_birthday', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'aplication/json'
                                },
                                body: JSON.stringify(birthday),
                            });

                            if (response.ok) {
                                console.log('response worked!');
                                handleClick();
                            }

                        }}>Submit</Button>
                    </Form.Field>
                </Form>
            </section>
        </main>
    )
}
