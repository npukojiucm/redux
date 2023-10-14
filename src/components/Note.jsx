export default function Note({ id, title, price, handlersBtn }) {
    return (
        <li className="list-item" data-id={id}>
            <span className="item-title">{title}</span>
            <span className="item-price">{price}</span>

            <button onClick={handlersBtn.edit}>Edit</button>
            <button className="btn-delete" onClick={handlersBtn.delete}>Delete</button>
        </li>
    )
}