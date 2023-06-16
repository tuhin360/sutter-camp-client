import { useQuery } from "@tanstack/react-query";


const AllUser = () => {

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    return (
        <div>
            <h3>All user</h3>
            {users.length}
        </div>
    );
};

export default AllUser;