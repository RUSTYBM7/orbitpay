import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart'; // Generate with flutterfire configure

import 'screens/orbitpay_card_screen.dart';
import 'screens/orbitpay_ai_assistant_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const OrbitPayApp());
}

class OrbitPayApp extends StatelessWidget {
  const OrbitPayApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'OrbitPay Credit Union',
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF6B46C1),
        scaffoldBackgroundColor: const Color(0xFF0F0A1F),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6B46C1),
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const OrbitPayHome(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class OrbitPayHome extends StatefulWidget {
  const OrbitPayHome({super.key});

  @override
  State<OrbitPayHome> createState() => _OrbitPayHomeState();
}

class _OrbitPayHomeState extends State<OrbitPayHome> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    const OrbitPayCardScreen(),
    const OrbitPayAIAssistantScreen(),
    const Center(child: Text('More screens: Transfers, Loans, Investments - Full version in next iteration')),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) => setState(() => _currentIndex = index),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.credit_card), label: 'Card'),
          NavigationDestination(icon: Icon(Icons.auto_awesome), label: 'AI Assistant'),
          NavigationDestination(icon: Icon(Icons.account_balance), label: 'Banking'),
        ],
      ),
    );
  }
}