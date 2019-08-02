/* link blocking at child Node of element */
if (listWithAccessLevel !== undefined && listWithAccessLevel !== null) {
    listWithAccessLevel.onclick = (e) => {
        let target = e.target.closest('a');
        if (target && listWithAccessLevel.contains(target)) {
            return false;
        }
    }
}