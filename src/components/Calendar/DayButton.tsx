import React, {memo, useEffect} from 'react';

interface DayButtonProps {
    value: number | null;
    isSelected: boolean;
    onClick: () => void;
}

const DayButton: React.FC<DayButtonProps> = ({ value, isSelected, onClick }) => {
    useEffect(() => {
        console.log("component render");
    }, []);
    return (
        <button
            onClick={onClick}
            style={isSelected ? { backgroundColor: 'black', color: 'white' } : {}}
        >
            {value}
        </button>
    );
};

export default memo(DayButton);