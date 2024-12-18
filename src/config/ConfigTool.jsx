import React, { useState } from "react"
import Button from "../components/Button"

const ConfigTool = () => {
    const [variant, setVariant] = useState("primary")
    const [size, setSize] = useState("medium")
    const [children, setChildren] = useState("Click Me")
    const [disabled, setDisabled] = useState(false)

    const variantOptions = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "outlinePrimary",
        "outlineSecondary",
        "outlineInfo",
        "outlineSuccess",
        "outlineWarning",
    ]

    const sizeOptions = ["small", "medium", "large", "full", "circle"]

    return (
        <div className="p-4 border rounded-lg shadow-md w-[400px]">
            <h2 className="text-xl font-bold">Button Tool</h2>

            {/* Form điều chỉnh các props */}
            <div className="space-y-4 p-4 bg-white rounded shadow">
                {/* Variant */}
                <div>
                    <label className="block text-sm font-medium mb-2">Variant:</label>
                    <select
                        value={variant}
                        onChange={(e) => setVariant(e.target.value)}
                        className="p-2 border rounded w-full"
                    >
                        {variantOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Size */}
                <div>
                    <label className="block text-sm font-medium mb-2">Size:</label>
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="p-2 border rounded w-full"
                    >
                        {sizeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Children */}
                <div>
                    <label className="block text-sm font-medium mb-2">Text (Children):</label>
                    <input
                        type="text"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>

                {/* Disabled */}
                <div>
                    <label className="block text-sm font-medium mb-2">Disabled:</label>
                    <input
                        type="checkbox"
                        checked={disabled}
                        onChange={(e) => setDisabled(e.target.checked)}
                        className="h-4 w-4"
                    />
                </div>
            </div>

            {/* Preview Button */}
            <div className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold mb-4">Preview:</h3>
                <Button variant={variant} size={size} disabled={disabled}>
                    {children}
                </Button>
            </div>
        </div>
    )
}

export default ConfigTool