import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CiMenuKebab } from "react-icons/ci";

interface PropTypes {
  onPressButtonDetail: () => void;
  onPressButtonDelete?: () => void;
  hideButtonDelete?: boolean;
}

const DropdownAction = (props: PropTypes) => {
  const {
    onPressButtonDetail,
    onPressButtonDelete,
    hideButtonDelete = false,
  } = props;
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="light">
          <CiMenuKebab className="text-default-700" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="detail-event-button" onPress={onPressButtonDetail}>
          Detail
        </DropdownItem>
        {!hideButtonDelete ? (
          <DropdownItem
            key="delete-event"
            className="text-danger-500"
            onPress={onPressButtonDelete}
          >
            Delete
          </DropdownItem>
        ) : null}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownAction;
