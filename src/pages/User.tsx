import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-6">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;
