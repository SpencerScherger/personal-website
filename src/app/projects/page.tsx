export default function Projects() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-3">Projects & Research</h1>
        <ul className="list-disc list-inside">
          <li>
            <strong>Multilevel Monte Carlo Option Pricing</strong>: A financial model to simulate
            European options using stochastic differential equations and yfinance data.
          </li>
          <li>
            <strong>Standardized Test Score Predictiont</strong>: Developed statistical learning/machine learning
            models to predict students standardized test scores based on sociodemographic and economic data.
          </li>
          <li>
            <strong>Wordle Solver (Hard Mode)</strong>: CLI-based solver using optimal filtering
            strategies and letter frequencies.
          </li>
        </ul>
      </div>
    );
  }