    // витягуєм 
    const email = document.querySelector('#Email');
    const citi = document.querySelector('#citi');
    const nname = document.querySelector('#name');
    const userBtn = document.querySelector('#userBtn');
    const putBtn = document.querySelector('#putBtn');
    const id = document.querySelector('#id');
    const deleteBtn = document.querySelector('#deleteBtn');
    // зазначаєм адрес
    const BASE_URL = ' http://localhost:3005';

    deleteBtn.addEventListener('click', () => deleteUserHendler());
    const deleteUserHendler = async() => {

        const delUsers = id.value;

        try {
            const response = fetch(`${BASE_URL}/users/${delUsers}`, {
                method: 'delete',

            })
        } catch (error) {
            console.error(error);
        }



    }


    putBtn.addEventListener('click', () => changeUserHendler());
    const changeUserHendler = async() => {
        const chUser = {
            email: email.value,
            name: nname.value,
            citi: citi.value,
            id: id.value,
        }
        const idUsers = id.value;


        try {
            const response = fetch(`${BASE_URL}/users/${idUsers}`, {
                method: 'put',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(chUser),

            })
        } catch (error) {
            console.error(error);
        }

    }


    fetch(`${BASE_URL}/users`)
        .then((resp) => resp.json())
        .then((data) => console.log(data));


    userBtn.addEventListener('click', () => createUserHandler());
    const createUserHandler = async() => {
        const user = {
            email: email.value,
            name: nname.value,
            citi: citi.value,
            id: id.value,
        }

        try {
            const response = fetch(`${BASE_URL}/users`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user),

            })
        } catch (error) {
            console.error(error);
        }
        console.log(user);
    }

    window.onload = function() {
        // витягуєм 
        const getPostBtn = document.querySelector('#getPostBtn');
        const get_res = document.querySelector('#get_res');

        //api
        // зазначаєм адрес
        const BASE_URL = ' http://localhost:3005';
        // по кліку
        getPostBtn.addEventListener('click', async() => {
            // витягуєм пости
            const result = await getPostData();
            // перебираєм 
            result.forEach(element => {
                // виводим
                get_res.innerHTML += renderData(element);
            });
        });

        const getPostData = async() => {
            // робота с зпросами 
            const response = await fetch(`${BASE_URL}/users`);


            return await response.json();
        };

        // шаблон + деструктуризація { email, name, id, citi }
        const renderData = ({ email, name, id, citi }) => {
            return `
        <ul class="list-group">
        <li class="list-group-item">id ${id} ,  ${name}, email  ${email} , citi ${citi} </li>
      </ul>`
        }

    }