import { useEffect } from 'react';

const useScript = (url, onLoad = () => console.log(`SCRIPT LOADED: ${url}`)) => {
    useEffect(() => {
        if (url) {
            const script = document.createElement('script');

            script.src = url;
            script.async = true;
            script.onload = onLoad;
            document.querySelector('head').appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }

        return undefined;
    }, [url]);
};

export default useScript;
