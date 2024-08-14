function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height || !age || !gender) {
        alert('Harap lengkapi semua field.');
        return;
    }

    const bmi = weight / (height * height);
    let bmiCategory;
    let bmiAdvice = "";

    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan Berat Badan';
        bmiAdvice = "Pertimbangkan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal';
        bmiAdvice = "Selamat, berat badan Anda berada dalam kisaran normal. Terus pertahankan gaya hidup sehat.";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Kelebihan Berat Badan';
        bmiAdvice = "Pertimbangkan untuk menurunkan berat badan melalui diet seimbang dan olahraga.";
    } else {
        bmiCategory = 'Obesitas';
        bmiAdvice = "Sangat penting untuk menurunkan berat badan. Pertimbangkan untuk berkonsultasi dengan ahli gizi atau profesional kesehatan.";
    }

    document.getElementById('CalculatorContainer').style.display = 'block';
    document.getElementById('bmiAdviceSection').style.display = 'block';
    document.getElementById('bmiResult').textContent = bmi.toFixed(1);
    document.getElementById('bmiMessage').textContent = `BMI Anda termasuk dalam kategori ${bmiCategory}.`;
    document.getElementById('bmiAdvice').textContent = bmiAdvice;
    document.getElementById('countSection').style.display = 'none';
}

function calculatorSection() {
    document.getElementById('CalculatorContainer').style.display = 'none';
    document.getElementById('bmiAdviceSection').style.display = 'none';
    document.getElementById('countSection').style.display = 'block';
}