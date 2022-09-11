import React, {useRef, useEffect, useState} from 'react';

const SimpleCodeEditor = () => {
    const lineCounterRef = useRef<any>(null);
    const codeEditor = useRef<any>(null);
    const [value, setValue] = useState<string>("");

    let lineCountCache: number = 0;

    function lineCounter() {
        const lineCount = codeEditor.current.value.split("\n").length;
        const linesArr = [];
        if (lineCountCache !== lineCount) {
            for (let x = 0; x < lineCount; x++) {
                linesArr[x] = x + 1 + ".";
            }
            lineCounterRef.current.value = linesArr.join("\n");
        }
        lineCountCache = lineCount;
    }

    useEffect(() => {
        if (codeEditor && codeEditor.current) {
            codeEditor.current.addEventListener("scroll", () => {
                lineCounterRef.current.scrollTop = codeEditor.current.scrollTop;
                lineCounterRef.current.scrollLeft = codeEditor.current.scrollLeft;
            });

            codeEditor.current.addEventListener("keydown", (e: KeyboardEvent) => {
                const {keyCode} = e;
                const {value, selectionStart, selectionEnd} = codeEditor.current;

                if (keyCode === 9) {
                    e.preventDefault();
                    codeEditor.current.value =
                        value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);
                    codeEditor.current.setSelectionRange(
                        selectionStart + 2,
                        selectionStart + 2
                    );
                }
            });

            codeEditor.current.addEventListener("input", () => {
                lineCounter();
            });
        }
    }, [codeEditor]);
    return (
        <div className="code-editor-block">
            <h3 className="code-editor-block__title">Sample code</h3>
            <section className="code-editor">
                    <textarea className="line-counter" wrap="off" ref={lineCounterRef} readOnly={true} defaultValue={1 + "."}/>
                    <textarea
                        className="write-code"
                        wrap="off"
                        ref={codeEditor}
                        value={value}
                        onChange={() => setValue(codeEditor.current?.value)}
                    />
            </section>
        </div>
    );
};

export default SimpleCodeEditor;



