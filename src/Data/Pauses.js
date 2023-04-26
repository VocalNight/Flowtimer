const Pauses = (type, reason = '') => {
    const getType = () => type;
    const getReason = () => reason;

    return { getType, getReason}
}

export default Pauses;
