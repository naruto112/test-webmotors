import React, { InputHTMLAttributes } from "react";

import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

import { IMake } from "../../types";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  name: string;
  containerStyle?: object;
  data?: IMake[];
  doubleInput: boolean;
  doubleName?: string;
  typeField: "input" | "select";
  icon?: React.ComponentType<IconBaseProps>;
}

const Field: React.FC<InputProps> = ({
  name,
  data,
  icon: Icon,
  doubleInput,
  doubleName,
  typeField,
  ...rest
}) => {
  return (
    <Container>
      {Icon && <Icon size={16} />}
      <span>{name}:</span>
      {typeField === "input" ? (
        <>
          <input type="text" {...rest} />
          {doubleInput && (
            <>
              <span>{doubleName}:</span>{" "}
              <input type="text" defaultValue="200km" size={10} />
            </>
          )}
        </>
      ) : (
        <select name="select" id="select" {...rest}>
          <option value="todas">Todas</option>
          {data?.map((make) => (
            <option key={make.ID} value={make.ID}>
              {make.Name}
            </option>
          ))}
        </select>
      )}
    </Container>
  );
};

export default Field;
