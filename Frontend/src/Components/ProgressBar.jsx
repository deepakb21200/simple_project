// ✅ ProgressBar.jsx
export default function ProgressBar({ step }) {
  const steps = [
    { id: 1, title: "Information" },
    { id: 2, title: "Shipping" },
    { id: 3, title: "Payment" },
    { id: 4, title: "Review" },
  ];

  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((s, index) => (
        <div key={s.id} className="flex items-center text-center">
          {/* Circle */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold 
            ${
              step === s.id
                ? "bg-purple-800 text-white"
                : step > s.id
                ? "border-2 border-purple-800 text-purple-800"
                : "border-2 border-gray-300 text-gray-400"
            }`}
          >
            {step > s.id ? "✓" : s.id}
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-24 h-[2px] ${
                step > s.id ? "bg-purple-800" : "bg-gray-300"
              }`}
            ></div>
          )}

          {/* Label */}
          <p
            className={`text-sm mt-2 ml-2 ${
              step === s.id
                ? "text-purple-900 font-medium"
                : step > s.id
                ? "text-purple-700"
                : "text-gray-500"
            }`}
          >
            {s.title}
          </p>
        </div>
      ))}
    </div>
  );
}
