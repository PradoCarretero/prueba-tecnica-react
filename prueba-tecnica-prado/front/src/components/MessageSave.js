import Snackbar from "../core/Snackbar";

export default function SnackbarAlert(props) {
  return <Snackbar onClose={props.onClose} snackbar={props.snackbar} />;
}
