"use client";

import { useState } from "react";
import Link from "next/link";

// Pre-defined products list for client-side rendering
const initialProducts = [
  {
    "id": "KOM220",
    "model": "Komatsu PC220",
    "brand": "Komatsu",
    "price": 72000,
    "year": 2021,
    "hours": 3200,
    "weight": "22,000 kg",
    "image": "/images/Komatsu PC220 excavator.webp",
    "description": "The Komatsu PC220 is a powerful, reliable hydraulic excavator designed for medium to heavy earthmoving projects. It features advanced hydraulics for smooth operations, fuel efficiency, and a comfortable operator cabin. This machine is in excellent working condition with regular dealer maintenance.",
    "specs": {
      "Operating Weight": "22,000 kg (48,500 lbs)",
      "Engine Model": "Komatsu SAA6D107E-1",
      "Engine Power": "125 kW / 168 HP @ 2000 rpm",
      "Bucket Capacity": "1.0 m³ - 1.2 m³",
      "Maximum Digging Depth": "6,620 mm",
      "Condition": "Used - Excellent Working Condition"
    }
  },
  {
    "id": "CAT320D",
    "model": "CAT 320D",
    "brand": "Caterpillar",
    "price": 68000,
    "year": 2019,
    "hours": 4500,
    "weight": "20,000 kg",
    "image": "/images/cat_placeholder.jpg",
    "description": "The Cat 320D hydraulic excavator delivers high performance, versatility, and exceptional fuel efficiency. Known for its robust construction, the 320D handles various applications from digging to trenching and heavy lifting. Highly recommended for construction and mining sites.",
    "specs": {
      "Operating Weight": "20,000 kg (44,092 lbs)",
      "Engine Model": "Cat C6.4 ACERT",
      "Engine Power": "110 kW / 148 HP",
      "Bucket Capacity": "0.9 m³",
      "Maximum Digging Depth": "6,300 mm",
      "Condition": "Used - Well Maintained"
    }
  }
];

export default function Inventory() {
  const [filterBrand, setFilterBrand] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredProducts = initialProducts.filter(p => {
    const matchesBrand = filterBrand === "All" || p.brand === filterBrand;
    const matchesSearch = p.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
    }, 5000);
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      {/* Banner */}
      <div style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        padding: "4rem 2rem",
        textAlign: "center",
        borderBottom: "4px solid #f59e0b"
      }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0, letterSpacing: "-0.5px" }}>Global Excavator Inventory</h1>
        <p style={{ color: "#9ca3af", fontSize: "1.1rem", marginTop: "10px", marginBottom: 0 }}>Browse our selection of premium quality pre-owned excavators ready for immediate delivery.</p>
      </div>

      {/* Main Grid */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "40px"
      }}>
        {/* Sidebar Filters */}
        <aside style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          height: "fit-content"
        }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0 0 20px" }}>Filters</h3>
          
          {/* Search */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "bold", color: "#4b5563", marginBottom: "8px" }}>Search Machinery</label>
            <input
              type="text"
              placeholder="e.g. Komatsu, CAT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Brand Filter */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "bold", color: "#4b5563", marginBottom: "8px" }}>Filter by Brand</label>
            {["All", "Komatsu", "Caterpillar"].map(brand => (
              <button
                key={brand}
                onClick={() => setFilterBrand(brand)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 12px",
                  marginBottom: "6px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: filterBrand === brand ? "#f59e0b" : "transparent",
                  color: filterBrand === brand ? "#111827" : "#4b5563",
                  fontWeight: filterBrand === brand ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {brand === "Caterpillar" ? "CAT" : brand}
              </button>
            ))}
          </div>
        </aside>

        {/* Product Catalog List */}
        <div>
          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: "center",
              backgroundColor: "#ffffff",
              padding: "4rem 2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <span style={{ fontSize: "3rem" }}>🔍</span>
              <h3 style={{ fontSize: "1.25rem", margin: "16px 0 8px" }}>No Machines Found</h3>
              <p style={{ color: "#6b7280", margin: 0 }}>Try clearing your search filters to find other premium machinery.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
              {filteredProducts.map(product => (
                <div key={product.id} style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "grid",
                  gridTemplateColumns: "350px 1fr",
                  gap: "24px",
                  border: "1px solid #e5e7eb"
                }}>
                  {/* Image */}
                  <div style={{ position: "relative", height: "100%", minHeight: "240px", backgroundColor: "#e5e7eb" }}>
                    <img
                      src={product.image}
                      alt={product.model}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      backgroundColor: "#111827",
                      color: "#f59e0b",
                      padding: "4px 12px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      fontSize: "0.85rem"
                    }}>{product.brand}</span>
                  </div>
                  
                  {/* Content details */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0 }}>{product.model}</h2>
                        <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "#f59e0b" }}>${product.price.toLocaleString()}</span>
                      </div>
                      <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6, margin: "12px 0 20px" }}>
                        {product.description}
                      </p>
                      
                      {/* Specs snippet */}
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "16px",
                        padding: "16px",
                        backgroundColor: "#f9fafb",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        color: "#4b5563",
                        marginBottom: "20px"
                      }}>
                        <div>📅 <strong>Year:</strong> {product.year}</div>
                        <div>⏱️ <strong>Hours:</strong> {product.hours}h</div>
                        <div>⚖️ <strong>Weight:</strong> {product.weight}</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "12px", borderTop: "1px solid #f3f4f6", paddingTop: "20px" }}>
                      <Link href={`/products/${product.id}`} style={{
                        backgroundColor: "#f59e0b",
                        color: "#111827",
                        padding: "10px 24px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "0.9rem"
                      }}>Full Specifications</Link>
                      <a
                        href="#inquiry"
                        onClick={() => setSelectedProduct(product.model)}
                        style={{
                          backgroundColor: "#111827",
                          color: "#ffffff",
                          padding: "10px 24px",
                          borderRadius: "4px",
                          textDecoration: "none",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          cursor: "pointer"
                        }}
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Form */}
      <section id="inquiry" style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        padding: "5rem 2rem",
        borderTop: "8px solid #f59e0b"
      }}>
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "12px" }}>Quick Machinery Inquiry</h2>
            <p style={{ color: "#9ca3af" }}>Fill out the form below to receive a CIF price quote, machine video, and customized logistics details within 12 hours.</p>
          </div>

          <form onSubmit={handleInquirySubmit} style={{
            backgroundColor: "#1f2937",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
            border: "1px solid #374151"
          }}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", color: "#d1d5db", marginBottom: "8px" }}>Selected Machinery</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#374151",
                  border: "1px solid #4b5563",
                  borderRadius: "4px",
                  color: "#ffffff",
                  boxSizing: "border-box"
                }}
              >
                <option value="">-- Choose excavator --</option>
                {initialProducts.map(p => (
                  <option key={p.id} value={p.model}>{p.model}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", color: "#d1d5db", marginBottom: "8px" }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#374151",
                    border: "1px solid #4b5563",
                    borderRadius: "4px",
                    color: "#ffffff",
                    boxSizing: "border-box"
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", color: "#d1d5db", marginBottom: "8px" }}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#374151",
                    border: "1px solid #4b5563",
                    borderRadius: "4px",
                    color: "#ffffff",
                    boxSizing: "border-box"
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", color: "#d1d5db", marginBottom: "8px" }}>Destination Port & Country *</label>
              <input
                type="text"
                required
                placeholder="e.g. Port of Rotterdam, Netherlands"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#374151",
                  border: "1px solid #4b5563",
                  borderRadius: "4px",
                  color: "#ffffff",
                  boxSizing: "border-box"
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", color: "#d1d5db", marginBottom: "8px" }}>Detailed Message</label>
              <textarea
                rows={4}
                placeholder="Please write down your target price, shipping terms (FOB/CIF), and specific machinery queries..."
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#374151",
                  border: "1px solid #4b5563",
                  borderRadius: "4px",
                  color: "#ffffff",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  resize: "vertical"
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#f59e0b",
                color: "#111827",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              Submit CIF Quote Inquiry &rarr;
            </button>
          </form>

          {inquirySubmitted && (
            <div style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#10b981",
              color: "#ffffff",
              borderRadius: "4px",
              textAlign: "center",
              fontWeight: "bold"
            }}>
              ✓ Thank you! Your inquiry has been sent. We will get back to you shortly with full documentation.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
