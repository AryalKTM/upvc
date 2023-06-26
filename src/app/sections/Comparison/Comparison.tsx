import { Section, TextUnderline, Title } from "@/app/components";

export default function Comparison() {
  const data = [
    ["Weight", "Light", "Light", "Heavy"],
    [
      "Finishing",
      "No Paint/Polish Required",
      "Requires Powder Coating / Anodizing",
      "Requires Routine Painting / Polishing",
    ],
    [
      "Corrosion",
      "No Rust / Corrosion",
      "Prone to Oxidation and Corrosion",
      "Prone to Termites",
    ],
    [
      "UV Resistance",
      "Does not fade / disorder",
      "Can Disorder",
      "Very Susceptible to Discoloration",
    ],
    [
      "Fire",
      "Does not Propagate Fire",
      "Very High Melting Temperature",
      "Propagates and catches fire easily",
    ],
    ["Effect of Moisture", "No Swelling", "Water causes Oxidation", "Expands"],
    [
      "Maintenance",
      "Only Routine Cleaning",
      "Periodic Maintenance",
      "Regular Maintenance",
    ],
    [
      "Sound Insulation",
      "Sound-Proof",
      "Not soundproof compared to uPVC and Wood",
      "Better than Aluminum",
    ],
    [
      "Thermal Insulation",
      "Superior Thermal Insulation",
      "Thermally inefficient",
      "Minimal Thermal Insulation",
    ],
  ];

  return (
    <Section>
        <Title><TextUnderline>uPvc</TextUnderline> vs its alternatives</Title>
      <div className="px-5 overflow-x-auto mt-8 lg:mt-16">
        <table className="mx-auto">
          <tbody className="text-base lg:text-xl">
            <tr className="bg-primary text-white">
              <th className="rounded-l-lg lg:p-6"></th>
              <th className="lg:p-6">uPvc</th>
              <th className="lgp-6">Aluminium</th>
              <th className="p-6 rounded-r-lg">Wood</th>
            </tr>
            {data.map((d, i) => (
              <tr key={i} className="border-b-2 border-primary">
                <td className="p-6 text-primary font-bold">{d[0]}</td>
                <td className="p-6 font-medium">{d[1]}</td>
                <td className="p-6 font-medium">{d[2]}</td>
                <td className="p-6 font-medium">{d[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
