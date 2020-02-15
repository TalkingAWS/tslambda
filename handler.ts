
export const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from Typescript!',
        input: event,
      },
      null,
      2
    ),
  };

};
