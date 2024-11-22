const Education = () => {
  const educationData = [
    {
      institution: "United International University",
      degree: "B.Sc in Computer Science and Engineering",
      years: "2022 - Present",
      description:
        "Focusing on software development, algorithms, and data structures. Involved in various projects and hackathons.",
    },
    // Add more entries as necessary
  ];
  return (
    <section className="py-16 bg-customBg2" id="education">
      <div className="container mx-auto px-4">
        <h1 className="text-white">Education</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-customBg_active text-white">
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Institution
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Degree
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Years
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {edu.institution}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {edu.degree}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {edu.years}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-800">
                    {edu.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
