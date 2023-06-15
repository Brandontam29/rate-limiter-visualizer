import { FieldErrors, Path } from "react-hook-form";

const isHookFormError = <T>(errors: FieldErrors, name: Path<T>) => {
  const properties = name.split(".");

  return searchProperties(errors, properties);
};

const searchProperties = (
  obj: { [key: string]: any },
  properties: string[]
): boolean => {
  let currentObj = obj;

  for (const property of properties) {
    if (
      typeof currentObj === "object" &&
      currentObj !== null &&
      property in currentObj
    ) {
      currentObj = currentObj[property];
    } else {
      return false;
    }
  }

  return true;
};

export default isHookFormError;
