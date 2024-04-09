import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  trigger?: React.ReactNode;
};
export const VideoDialog = ({ trigger }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/inteminer-26db4.appspot.com/o/carloscruz%2Fvideo.mp4?alt=media&token=495e02c6-bb42-4ee3-9194-f8e40af49e19"
          className="w-full h-full focus:outline-none"
          controls
          autoPlay
        ></video>
      </DialogContent>
    </Dialog>
  );
};
