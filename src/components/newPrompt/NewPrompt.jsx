import './newPrompt.css';

const NewPrompt = () => {
    return (
        <div className="newPrompt">
            <form className="newForm">
                <label htmlFor="file">
                    <img src="/attachment.png" alt="" />
                </label>
                <input type="file" id="file" multiple={false} style={{ display: "none" }} />
                <input type="text" placeholder="Ask anything...." />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    );
};

export default NewPrompt;
