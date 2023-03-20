/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMantraById,
  updateMantra,
} from "../../features/mantras/mantrasSlice";
import { Button } from "@chakra-ui/react";
import { AddButtonProps } from "../../typings";

export const AddButton: FunctionComponent<AddButtonProps> = ({
  id,
  children,
}) => {
  const mantra = useSelector((state) => selectMantraById(state, id));
  const name = mantra?.name;
  const done = mantra?.done;
  const toDo = mantra?.toDo;
  const dispatch = useDispatch();

  if (!mantra) {
    return (
      <Button colorScheme="gray" isDisabled>
        {children}
      </Button>
    );
  }

  const addMantras = (): any => {
    try {
      const sum = done + 100;
      dispatch(
        updateMantra({
          id,
          name,
          done: sum,
          toDo,
        })
      ).unwrap();
    } catch (err) {
      console.error("Failed to add mantras", err);
    }
  };

  return (
    <Button colorScheme="green" onClick={addMantras}>
      {children}
    </Button>
  );
};
