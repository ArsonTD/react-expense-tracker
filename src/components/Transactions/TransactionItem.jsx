/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState();

    return (
        <li className="bg-zinc-600 text-white px-3 py-3 rounded-lg mb-2 flex justify-between items-center">
            <p>{transaction.description}</p>
            <div>
                <span>${transaction.amount}</span>
                <button
                    onClick={() => {
                        deleteTransaction(transaction.id);
                    }}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition duration-300"
                >
                    x
                </button>
            </div>
        </li>
    );
}

export default TransactionItem;
