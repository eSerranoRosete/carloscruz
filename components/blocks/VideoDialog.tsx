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
  src: string;
};
export const VideoDialog = ({ trigger, src }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <video
          src={src}
          className="w-full h-full focus:outline-none"
          controls
          autoPlay
        ></video>
      </DialogContent>
    </Dialog>
  );
};
