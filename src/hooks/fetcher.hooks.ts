export const fetcher = (url: string) => fetch(url).then((res) => res.json);

export const fetcherPost = (url: string, dataBody: {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody),
  }).then((res) => {
    if(!res.ok){
        throw new Error("Failed to send data!");
    }
    return res.json
  });

export const fetcherPatch = (url: string, dataBody: {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody),
  }).then((res) => {
    if(!res.ok){
        throw new Error("Failed to send data!");
    }
    return res.json
  });

