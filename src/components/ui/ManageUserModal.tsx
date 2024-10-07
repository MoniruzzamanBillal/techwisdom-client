import { UserStatus } from "@/utils/Constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";

type TManageUserProps = {
  handleBlockUser?: (userId: string) => void;
  handleUnblockUser?: (userId: string) => void;
  handleDeleteUser: (userId: string) => void;
  userId: string;
  status: string;
};

const ManageUserModal = ({
  handleBlockUser,
  handleUnblockUser,
  handleDeleteUser,
  userId,
  status,
}: TManageUserProps) => {
  return (
    <div className="ManageBookingModalContainer  flex justify-center items-center gap-x-2 ">
      {/*  */}

      {status === UserStatus.active ? (
        <AlertDialog>
          {/* alert trigger  */}
          <AlertDialogTrigger asChild>
            <Button className="  bg-prime50 hover:bg-prime100 text-sm font-medium ">
              Block
            </Button>
          </AlertDialogTrigger>

          {/* alert content  */}
          <AlertDialogContent>
            {/* header and content type  */}
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure to block this user ?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will block this user from our
                server .
              </AlertDialogDescription>
            </AlertDialogHeader>

            {/* bottom button type  */}
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleBlockUser && handleBlockUser(userId)}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <AlertDialog>
          {/* alert trigger  */}
          <AlertDialogTrigger asChild>
            <Button className="  bg-prime50 hover:bg-prime100 text-sm font-medium ">
              Unblock
            </Button>
          </AlertDialogTrigger>

          {/* alert content  */}
          <AlertDialogContent>
            {/* header and content type  */}
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure to unblock this user ?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will unblock this user from
                our server .
              </AlertDialogDescription>
            </AlertDialogHeader>

            {/* bottom button type  */}
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleUnblockUser && handleUnblockUser(userId)}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* delete user  btn  */}
      <AlertDialog>
        {/* alert trigger  */}
        <AlertDialogTrigger asChild>
          <Button className="  bg-red-600 hover:bg-red-700 text-sm font-medium ">
            Delete
          </Button>
        </AlertDialogTrigger>

        {/* alert content  */}
        <AlertDialogContent>
          {/* header and content type  */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete this user ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will delete this user from our
              server .
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* bottom button type  */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDeleteUser(userId)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* delete user  btn  */}

      {/*  */}
    </div>
  );
};

export default ManageUserModal;
