// import { getCookie, setCookie } from "@/utils/cookieUtils";
// import { useState } from "react";

// const useCookie = (name: string) => {
//   const [item, setItem] = useState<string | null>(getCookie(name));

//   const updateItem = (value: string) => {
//     setItem(value);
//     setCookie({ name, value, daysToLive: 7 });
//   };

//   const deleteItem = () => {
//     setItem(null);
//     setCookie({ name, value: null, daysToLive: null });
//   };

//   return [item, updateItem, deleteItem] as const;
// };

// export default useCookie;
