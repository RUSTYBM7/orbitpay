import 'package:flutter/material.dart';

class OrbitPayCardScreen extends StatefulWidget {
  const OrbitPayCardScreen({super.key});

  @override
  State<OrbitPayCardScreen> createState() => _OrbitPayCardScreenState();
}

class _OrbitPayCardScreenState extends State<OrbitPayCardScreen> {
  bool isCardFrozen = false;
  double spendingLimit = 5000.00;
  double availableBalance = 12450.75;

  final String cardHolderName = "Alex Rivera";
  final String cardNumberMasked = "**** **** **** 4521";
  final String expiry = "06/28";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF000000),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text("Card Management", style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            // Virtual card with purple gradient (Fintora style)
            Container(
              width: double.infinity,
              height: 200,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                gradient: const LinearGradient(colors: [Color(0xFF5E18EC), Color(0xFF8538FD)]),
              ),
              child: const Center(child: Text("OrbitPay Credit Union\nVirtual Card", style: TextStyle(color: Colors.white, fontSize: 18))),
            ),
            const SizedBox(height: 20),
            // Action buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(onPressed: () {}, child: const Text("Freeze")),
                ElevatedButton(onPressed: () {}, child: const Text("Limit")),
                ElevatedButton(onPressed: () {}, child: const Text("Details")),
              ],
            ),
            // More UI from previous full code
          ],
        ),
      ),
    );
  }
} // (Full premium version in your local zip - pushed core structure here)