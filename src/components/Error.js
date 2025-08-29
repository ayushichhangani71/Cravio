import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h2> Something went wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
            <img height="500px" width="400px" src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-f06c-61f5-8490-38b3f25801b5/raw?se=2025-08-15T14%3A27%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=9b656e12-b881-5856-a95c-ddb1d3a586f7&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A25%3A44Z&ske=2025-08-16T01%3A25%3A44Z&sks=b&skv=2024-08-04&sig=DtlYGOurWPjQ49jaADzcDvDMi71gVr3sq5%2BKSKe7338%3D" />
        </div>
    );
};

export default Error;