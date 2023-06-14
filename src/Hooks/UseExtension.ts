import { useState, useEffect, useContext } from 'react';
import { IExtension } from '../Models/Extension';
import { ApplicationContext } from '../Contexsts/ApplicationContext';

export default function useExtension(Id: number) {
    const { Provider } = useContext(ApplicationContext);
    const [currentValue, setCurrentValue] = useState<IExtension>(null);
    const [updates, setUpdates] = useState<Partial<IExtension>>({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const ext: IExtension = await Provider.getExtensionById(Id);
            setCurrentValue(ext);
            setUpdates({});
            setIsLoading(false);
        }

        if (Id !== null) {
            fetchData();
        } else {
            setCurrentValue(null);
            setUpdates({});
        }
    }, [Id]);

    return {
        extension: { ...currentValue, ...updates }, isLoading, update: setUpdates, changes: updates
    };
}