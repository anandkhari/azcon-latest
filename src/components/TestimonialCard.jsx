// src/components/TestimonialCard.jsx

const TestimonialCard = ({ name, location, text }) => {
  return (
    <div className="bg-background p-8 rounded-lg shadow-lg">
      <p className="text-text-muted italic">"{text}"</p>
      <div className="mt-4">
        <p className="font-bold text-primary">{name}</p>
        <p className="text-sm text-text-muted">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
